using Microsoft.EntityFrameworkCore;
using RealEstateDMS.API.Controllers;
using RealEstateDMS.API.Models.Domain;

namespace RealEstateDMS.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSets for your domain entities
        public DbSet<Document> Documents { get; set; }
        public DbSet<DocumentsUpload> DocumentsUpload { get; set; }
        public DbSet<User> Users { get; set; }

        // Optional: Override OnModelCreating for configuration
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Example: Configure Document table if needed
            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Document>().ToTable("Documents");
            modelBuilder.Entity<DocumentsUpload>().ToTable("DocumentsUpload");
        }
    }
}
