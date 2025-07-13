using System.Runtime.Serialization;

namespace RoleManagementService.Models
{
    [DataContract]
    public class Role
    {
        [DataMember]
        public int Id { get; set; }

        [DataMember]
        public string Nombre { get; set; }

        [DataMember]
        public string Descripcion { get; set; }
    }
}
