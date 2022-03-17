#nullable disable
using Microsoft.EntityFrameworkCore;
using Manejo_De_Clientes_EF.model;

namespace ManejoUsuariosArkade.Data
{
    public class ManejoLoginArkadeContext : DbContext
    {
        public ManejoLoginArkadeContext (DbContextOptions<ManejoLoginArkadeContext> options)
            : base(options)
        {
        }

        public DbSet<Login> Login { get; set; }
    }
}
