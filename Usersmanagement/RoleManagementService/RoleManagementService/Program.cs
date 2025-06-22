using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using RoleManagementService.Interfaces;
using RoleManagementService.Repositories;
using RoleManagementService.Services;
using SoapCore;

var builder = WebApplication.CreateBuilder(args);

// DI y configuración
builder.Services.AddSoapCore();
builder.Services.AddSingleton<IRoleRepository, RoleRepository>();
builder.Services.AddSingleton<IRoleService, RoleServiceImpl>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

// Middleware de rutas
app.UseRouting();

app.UseEndpoints(endpoints =>
{
    // ✅ SOAP dentro de Endpoints, así evita ambigüedad
    endpoints.UseSoapEndpoint<IRoleService>("/RoleService.svc", new SoapEncoderOptions(), SoapSerializer.DataContractSerializer);
    endpoints.MapControllers();
});

app.Run();