using RoleManagementService.Models;
using System.Collections.Generic;
using System.ServiceModel;

namespace RoleManagementService.Interfaces
{
    [ServiceContract]
    public interface IRoleService
    {
        [OperationContract]
        bool Update(Role role);  
    }
}
