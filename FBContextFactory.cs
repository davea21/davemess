using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using SportsStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStore
{
    public class DBContextFactory : IDesignTimeDbContextFactory<DataContext>
        {
        public DataContext CreateDbContext(string[] args)
            {
                var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
                optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-SRELHR1\SQLEXPRESS;Initial Catalog=SportsStore;Integrated Security=True");

                return new DataContext(optionsBuilder.Options);
            }
        }
    
}
