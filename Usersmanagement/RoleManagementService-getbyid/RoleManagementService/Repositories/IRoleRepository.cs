using RoleManagementService.Models;
using System.Collections.Generic;

namespace RoleManagementService.Repositories
{
    public interface IRoleRepository
    {
        Role GetById(int id);  
    }
}

