using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient; // ✅ Usamos solo esta librería
using RoleManagementService.Models;

namespace RoleManagementService.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly string _connection;

        public RoleRepository(IConfiguration config)
        {
            _connection = config.GetConnectionString("DefaultConnection");
        }
        public bool Update(Role role)
        {
            using var con = new MySqlConnection(_connection);
            con.Open();
            var cmd = new MySqlCommand("UPDATE roles SET nombre = @nombre, descripcion = @descripcion WHERE id = @id", con);
            cmd.Parameters.AddWithValue("@nombre", role.Nombre);
            cmd.Parameters.AddWithValue("@descripcion", role.Descripcion);
            cmd.Parameters.AddWithValue("@id", role.Id);
            return cmd.ExecuteNonQuery() > 0;
        }

        
    }
}

