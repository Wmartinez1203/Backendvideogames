using RoleManagementService.Models;
using System.Collections.Generic;
using System.ServiceModel;

namespace RoleManagementService.Interfaces
{
    [ServiceContract]
    public interface IRoleService
    {
        [OperationContract]
        List<Role> GetAll();

        [OperationContract]
        Role GetById(int id);

        [OperationContract]
        bool Create(Role role);

        [OperationContract]
        bool Update(Role role);

        [OperationContract]
        bool Delete(int id);
    }
}
