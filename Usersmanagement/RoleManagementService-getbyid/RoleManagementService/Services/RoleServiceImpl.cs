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
        public Role GetById(int id)
        {
            return _repository.GetById(id);
        }

        
    }
}

