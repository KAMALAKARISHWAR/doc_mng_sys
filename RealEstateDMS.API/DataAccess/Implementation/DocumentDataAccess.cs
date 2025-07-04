
using RealEstateDMS.Data;
using RealEstateDMS.API.DataAccess.Interface;
using RealEstateDMS.API.Models.DTO;
using RealEstateDMS.API.Models.Domain;

namespace RealEstateDMS.API.DataAccess.Implementation
{
    public class DocumentDataAccess : IDocumentDataAccess
    {
        private readonly ApplicationDbContext _context;

        public DocumentDataAccess(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> UploadDocumentAsync(UploadDocumentDto dto, string filePath, string fileName)
        {
            var doc = new Document
            {
                DocumentTypeId = dto.DocumentTypeId,
                ProjectId = dto.ProjectId,
                PropertyId = dto.PropertyId,
                CustomerId = dto.CustomerId,
                FilePath = filePath,
                FileName = fileName,
                UploadedBy = dto.UploadedBy,
                MetadataRefNo = dto.MetadataRefNo,
                MetadataIssuer = dto.MetadataIssuer,
                MetadataDocumentDate = dto.MetadataDocumentDate,
                MetadataValidUntil = dto.MetadataValidUntil,
                AccessLevel = dto.AccessLevel,
                UploadDate = DateTime.UtcNow
            };

            _context.Documents.Add(doc);
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
