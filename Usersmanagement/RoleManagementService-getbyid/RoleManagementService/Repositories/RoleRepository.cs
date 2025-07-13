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

        public Role GetById(int id)
        {
            using var con = new MySqlConnection(_connection);
            con.Open();
            var cmd = new MySqlCommand("SELECT * FROM roles WHERE id = @id", con);
            cmd.Parameters.AddWithValue("@id", id);
            using var reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return new Role
                {
                    Id = reader.GetInt32("id"),
                    Nombre = reader.GetString("nombre"),
                    Descripcion = reader.GetString("descripcion")
                };
            }
            return null;
        }
    }
}

