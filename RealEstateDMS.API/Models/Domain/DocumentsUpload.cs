namespace RealEstateDMS.API.Models.Domain
{
    public class DocumentsUpload
    {
        public int Id { get; set; }
        public string DocumentType { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public DateTime UploadDate { get; set; }
    }
}
