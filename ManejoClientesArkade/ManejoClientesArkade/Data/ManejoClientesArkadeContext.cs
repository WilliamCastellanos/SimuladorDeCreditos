#nullable disable
using Microsoft.EntityFrameworkCore;
using Manejo_De_Clientes_EF.model;

namespace ManejoClientesArkade.Data
{
    public class ManejoClientesArkadeContext : DbContext
    {
        public ManejoClientesArkadeContext (DbContextOptions<ManejoClientesArkadeContext> options)
            : base(options)
        {
        }
        public DbSet<Client> Client { get; set; }
    }
}
