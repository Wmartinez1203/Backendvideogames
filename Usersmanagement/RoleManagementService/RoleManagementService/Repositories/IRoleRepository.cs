using RoleManagementService.Models;
using System.Collections.Generic;

namespace RoleManagementService.Repositories
{
    public interface IRoleRepository
    {
        List<Role> GetAll();
        Role GetById(int id);
        bool Create(Role role);
        bool Update(Role role);
        bool Delete(int id);
    }
}

