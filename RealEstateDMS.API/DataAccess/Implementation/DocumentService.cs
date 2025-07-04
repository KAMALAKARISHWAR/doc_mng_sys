using RealEstateDMS.API.Models.Domain;
using RealEstateDMS.API.DataAccess.Interface;
namespace RealEstateDMS.API.DataAccess.Implementation
{
    public class DocumentService : IDocumentService
    {
        private readonly IWebHostEnvironment _env;

        public DocumentService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task<string> UploadDocumentAsync(DocumentUploadModel model)
        {
            if (model.File == null || model.File.Length == 0)
                throw new Exception("No file uploaded.");

            if (string.IsNullOrEmpty(model.DocumentType))
                throw new Exception("Document type is missing.");

            var webRoot = _env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

            var uploadPath = Path.Combine(webRoot, "UploadedDocs", model.DocumentType);

            if (!Directory.Exists(uploadPath))
                Directory.CreateDirectory(uploadPath);

            var fileName = Guid.NewGuid() + Path.GetExtension(model.File.FileName);
            var filePath = Path.Combine(uploadPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await model.File.CopyToAsync(stream);
            }

            return $"Uploaded Successfully: {model.DocumentType}/{fileName}";
        }

    }
}
