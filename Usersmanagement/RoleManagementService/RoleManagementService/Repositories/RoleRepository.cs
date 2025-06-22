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

        public bool Create(Role role)
        {
            using var con = new MySqlConnection(_connection);
            con.Open();
            var cmd = new MySqlCommand("INSERT INTO roles (nombre, descripcion) VALUES (@nombre, @descripcion)", con);
            cmd.Parameters.AddWithValue("@nombre", role.Nombre);
            cmd.Parameters.AddWithValue("@descripcion", role.Descripcion);
            return cmd.ExecuteNonQuery() > 0;
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

        public bool Delete(int id)
        {
            using var con = new MySqlConnection(_connection);
            con.Open();
            var cmd = new MySqlCommand("DELETE FROM roles WHERE id = @id", con);
            cmd.Parameters.AddWithValue("@id", id);
            return cmd.ExecuteNonQuery() > 0;
        }
    }
}

