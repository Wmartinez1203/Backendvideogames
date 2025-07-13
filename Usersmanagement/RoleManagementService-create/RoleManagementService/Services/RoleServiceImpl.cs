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

        public bool Create(Role role)
        {
            // ✅ Validación para evitar errores por campos nulos
            if (string.IsNullOrWhiteSpace(role.Nombre) || string.IsNullOrWhiteSpace(role.Descripcion))
                return false;

            return _repository.Create(role);
        }
    }
}

