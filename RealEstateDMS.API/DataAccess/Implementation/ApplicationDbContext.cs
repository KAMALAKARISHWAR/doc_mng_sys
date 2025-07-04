
namespace RealEstateDMS.DataAccess.Implementation
{
    internal class ApplicationDbContext
    {
        public object Documents { get; internal set; }

        internal async Task<int> SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}