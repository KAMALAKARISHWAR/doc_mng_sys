using RealEstateDMS.API.Models.Domain;
using RealEstateDMS.API.DataAccess.Implementation;
namespace RealEstateDMS.API.DataAccess.Interface
{
    public interface IDocumentService
    {
        Task<string> UploadDocumentAsync(DocumentUploadModel model);
    }
}
