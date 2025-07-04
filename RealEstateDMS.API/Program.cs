using Microsoft.EntityFrameworkCore;
using RealEstateDMS.API.DataAccess.Interface;
using RealEstateDMS.DataAccess.Implementation;
using RealEstateDMS.Data;

using RealEstateDMS.API.DataAccess.Implementation;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 🔗 Register DbContext with SQL Server
builder.Services.AddDbContext<RealEstateDMS.Data.ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 💡 Register your data access class
builder.Services.AddScoped<IDocumentDataAccess, DocumentDataAccess>();
builder.Services.AddScoped<IDocumentService, DocumentService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Angular port
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseCors("AllowAngularDev");
app.MapControllers();
app.Run();