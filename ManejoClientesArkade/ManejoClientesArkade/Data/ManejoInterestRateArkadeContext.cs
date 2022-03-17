#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ManejoClientesArkade.model;

    public class ManejoInterestRateArkadeContext : DbContext
    {
        public ManejoInterestRateArkadeContext (DbContextOptions<ManejoInterestRateArkadeContext> options)
            : base(options)
        {
        }

        public DbSet<InterestRate> InterestRate { get; set; }
    }
