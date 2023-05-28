// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProjectFunding {
    struct Project {
        address creator;
        string description;
        uint256 fundingGoal;
        uint256 totalFunding;
    }

    mapping(uint256 => Project) public projects;
    mapping(uint256 => mapping(address => uint256)) public contributions;
    uint256 public projectCount;

    // Event emitted when a new project is created
    event ProjectCreated(uint256 projectId, address creator, string description, uint256 fundingGoal);

    // Event emitted when a contribution is made to a project
    event ContributionMade(uint256 projectId, address contributor, uint256 amount);

    // Function to create a new project
    function createProject(string memory _description, uint256 _fundingGoal) external {
        projectCount++;
        projects[projectCount] = Project({
            creator: msg.sender,
            description: _description,
            fundingGoal: _fundingGoal,
            totalFunding: 0
        });

        emit ProjectCreated(projectCount, msg.sender, _description, _fundingGoal);
    }

    // Function to contribute to a project
    function contribute(uint256 _projectId) external payable {
        require(_projectId > 0 && _projectId <= projectCount, "Invalid project ID");
        Project storage project = projects[_projectId];
        require(project.totalFunding < project.fundingGoal, "Project funding goal reached");

        contributions[_projectId][msg.sender] += msg.value;
        project.totalFunding += msg.value;

        emit ContributionMade(_projectId, msg.sender, msg.value);
    }

    // Function to calculate the matching funds using quadratic funding
    function calculateMatchingFunds(uint256 _projectId) public view returns (uint256) {
        require(_projectId > 0 && _projectId <= projectCount, "Invalid project ID");
        Project storage project = projects[_projectId];
        uint256 totalMatchingFunds = 0;

        for (uint256 i = 1; i <= projectCount; i++) {
            Project storage otherProject = projects[i];
            if (otherProject.totalFunding > 0 && otherProject.totalFunding < otherProject.fundingGoal) {
                totalMatchingFunds += sqrt(otherProject.totalFunding) - sqrt(project.totalFunding);
            }
        }

        return totalMatchingFunds;
    }

    // Helper function to calculate the square root (for demonstration purposes only)
    function sqrt(uint256 x) internal pure returns (uint256) {
        uint256 z = (x + 1) / 2;
        uint256 y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }
}