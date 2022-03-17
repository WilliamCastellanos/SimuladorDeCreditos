using Microsoft.EntityFrameworkCore;
using ManejoClientesArkade.Data;
using Microsoft.Extensions.DependencyInjection;
using ManejoUsuariosArkade.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ManejoInterestRateArkadeContext>(options =>

    options.UseSqlServer(builder.Configuration.GetConnectionString("devconnection")));

builder.Services.AddDbContext<ManejoLoginArkadeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("devconnection")));

builder.Services.AddDbContext<ManejoClientesArkadeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("devconnection")));

// Add services to the container.

builder.Services.AddCors(options => options.AddPolicy("AllowWebApp", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowWebApp");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
