namespace RealEstateDMS.API.Models.DTO
{
    public class UploadDocumentDto
    {
        public int DocumentTypeId { get; set; }
        public int? ProjectId { get; set; }
        public int? PropertyId { get; set; }
        public int? CustomerId { get; set; }

        public string MetadataRefNo { get; set; }
        public string MetadataIssuer { get; set; }
        public DateTime? MetadataDocumentDate { get; set; }
        public DateTime? MetadataValidUntil { get; set; }
        public string AccessLevel { get; set; }

        public IFormFile File { get; set; }
        public int UploadedBy { get; set; }
    }
}
