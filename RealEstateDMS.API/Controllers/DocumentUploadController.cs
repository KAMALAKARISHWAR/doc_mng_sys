using Microsoft.AspNetCore.Mvc;
using RealEstateDMS.API.DataAccess.Interface;
using RealEstateDMS.API.DataAccess.Implementation;
using RealEstateDMS.API.Models.Domain;
using RealEstateDMS.Data;

namespace RealEstateDMS.API.Controllers
{
    [Route("api/[controller]")]
    public class DocumentUploadController : ControllerBase
    {
        //private readonly ApplicationDbContext _context;

        //public DocumentUploadController(ApplicationDbContext context)
        //{
        //    _context = context;
        //}

        //[HttpPost("upload")]
        //public async Task<IActionResult> UploadDocument([FromForm] DocumentUploadModel model)
        //{
        //    if (model.File != null && model.File.Length > 0)
        //    {
        //        var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/UploadedDocs");
        //        if (!Directory.Exists(uploadsFolder))
        //            Directory.CreateDirectory(uploadsFolder);

        //        var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(model.File.FileName);
        //        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

        //        using (var stream = new FileStream(filePath, FileMode.Create))
        //        {
        //            await model.File.CopyToAsync(stream);
        //        }

        //        var document = new DocumentsUpload
        //        {
        //            DocumentType = model.DocumentType,
        //            FileName = model.File.FileName,
        //            FilePath = "/UploadedDocs/" + uniqueFileName,
        //            UploadDate = DateTime.Now
        //        };

        //        _context.DocumentsUpload.Add(document);
        //        await _context.SaveChangesAsync();

        //        return Ok(new { message = "File uploaded and saved to DB.", previewUrl = document.FilePath });
        //    }

        //    return BadRequest("No file uploaded.");
        //}

        private readonly IDocumentService _documentService;

        public DocumentUploadController(IDocumentService documentService)
        {
            _documentService = documentService;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] DocumentUploadModel model)
        {
            try
            {
                var result = await _documentService.UploadDocumentAsync(model);
                return Ok(new { message = result });
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
