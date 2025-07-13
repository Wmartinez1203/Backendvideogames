using RoleManagementService.Models;
using System.Collections.Generic;

namespace RoleManagementService.Repositories
{
    public interface IRoleRepository
    {
        bool Update(Role role);
    }
}

