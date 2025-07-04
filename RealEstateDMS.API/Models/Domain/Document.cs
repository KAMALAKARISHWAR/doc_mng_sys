namespace RealEstateDMS.API.Models.Domain
{
    public class Document
    {
        public int DocumentId { get; set; }
        public int DocumentTypeId { get; set; }
        public int? ProjectId { get; set; }
        public int? PropertyId { get; set; }
        public int? CustomerId { get; set; }

        public string FileName { get; set; }
        public string FilePath { get; set; }
        public DateTime UploadDate { get; set; } = DateTime.UtcNow;
        public int UploadedBy { get; set; }

        public string MetadataRefNo { get; set; }
        public string MetadataIssuer { get; set; }
        public DateTime? MetadataDocumentDate { get; set; }
        public DateTime? MetadataValidUntil { get; set; }
        public string AccessLevel { get; set; }
        public int Version { get; set; } = 1;
    }
}
