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

        public List<Role> GetAll()
        {
            var roles = new List<Role>();
            using var con = new MySqlConnection(_connection);
            con.Open();
            var cmd = new MySqlCommand("SELECT * FROM roles", con);
            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                roles.Add(new Role
                {
                    Id = reader.GetInt32("id"),
                    Nombre = reader.GetString("nombre"),
                    Descripcion = reader.GetString("descripcion")
                });
            }
            return roles;
        }
    }
}

