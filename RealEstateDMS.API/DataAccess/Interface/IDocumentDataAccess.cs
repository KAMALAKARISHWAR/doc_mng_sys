using RealEstateDMS.API.Models.DTO;

namespace RealEstateDMS.API.DataAccess.Interface
{
    public interface IDocumentDataAccess
    {
        Task<bool> UploadDocumentAsync(UploadDocumentDto dto, string filePath, string fileName);
    }
}
