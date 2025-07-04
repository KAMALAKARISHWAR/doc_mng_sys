namespace RealEstateDMS.API.Models.Domain
{
    public class DocumentUploadModel
    {
        public string DocumentType { get; set; }
        public IFormFile File { get; set; }
    }
}
