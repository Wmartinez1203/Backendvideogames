using RoleManagementService.Interfaces;
using RoleManagementService.Models;
using RoleManagementService.Repositories;
using System.Collections.Generic;

namespace RoleManagementService.Services
{
    public class RoleServiceImpl : IRoleService
    {
        private readonly IRoleRepository _repository;

        public RoleServiceImpl(IRoleRepository repository)
        {
            _repository = repository;
        }

        public bool Update(Role role)
        {
            if (role.Id <= 0 || string.IsNullOrWhiteSpace(role.Nombre) || string.IsNullOrWhiteSpace(role.Descripcion))
                return false;

            return _repository.Update(role);
        }
    }
}

