using System.ComponentModel.DataAnnotations;

namespace RoleManagementService.Models
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
    }
}

