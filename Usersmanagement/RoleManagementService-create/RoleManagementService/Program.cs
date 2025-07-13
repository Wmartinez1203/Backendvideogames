using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using RoleManagementService.Interfaces;
using RoleManagementService.Repositories;
using RoleManagementService.Services;
using SoapCore;

var builder = WebApplication.CreateBuilder(args);

// Puerto fijo
builder.WebHost.UseUrls("http://localhost:3007");

// DI y configuración
builder.Services.AddSoapCore();
builder.Services.AddSingleton<IRoleRepository, RoleRepository>();
builder.Services.AddSingleton<IRoleService, RoleServiceImpl>();
builder.Services.AddControllers();

var app = builder.Build();

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.UseSoapEndpoint<IRoleService>("/RoleService.svc", new SoapEncoderOptions(), SoapSerializer.DataContractSerializer);
    endpoints.MapControllers();
});

app.Run();
