using Microsoft.AspNetCore.Mvc;
using RealEstateDMS.API.DataAccess.Interface;
using RealEstateDMS.API.Models.DTO;

namespace RealEstateDMS.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentDataAccess _dataAccess;
        private readonly IWebHostEnvironment _env;

        public DocumentController(IDocumentDataAccess dataAccess, IWebHostEnvironment env)
        {
            _dataAccess = dataAccess;
            _env = env;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadDocument([FromForm] UploadDocumentDto dto)
        {
            if (dto.File == null || dto.File.Length == 0)
                return BadRequest("Invalid file.");

            var uploadsDir = Path.Combine(_env.WebRootPath, "uploads");
            if (!Directory.Exists(uploadsDir))
                Directory.CreateDirectory(uploadsDir);

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(dto.File.FileName);
            var fullPath = Path.Combine(uploadsDir, fileName);

            using (var stream = new FileStream(fullPath, FileMode.Create))
            {
                await dto.File.CopyToAsync(stream);
            }

            var dbPath = $"uploads/{fileName}";
            var result = await _dataAccess.UploadDocumentAsync(dto, dbPath, dto.File.FileName);

            return result ? Ok("Document uploaded successfully.") : StatusCode(500, "Upload failed.");
        }
    }
}
