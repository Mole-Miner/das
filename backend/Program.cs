var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontendApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Allowed domains
              .AllowAnyMethod()                                                // Allows GET, POST, PUT, DELETE
              .AllowAnyHeader();                                               // Allows custom headers
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var apiGroup = app.MapGroup("api/v1");

var categories = new List<Category>
    {
        new Category(1, "Category 1", "Categoryd 1 description"),
        new Category(2, "Category 2", "Categoryd 2 description"),
        new Category(3, "Category 3", "Categoryd 3 description"),
    };


apiGroup.MapGet("/categories", () =>
{
    return categories.Select(category => new CategoryDto { Id = category.Id, Name = category.Name }).ToList();
})
.WithName("GetCategories");

apiGroup.MapGet("/categories/{id}", (int id) =>
{
    var category = categories.Find(category => id == category.Id);

    return new CategoryDetailsDto { Id = category?.Id ?? 0, Name = category?.Name ?? "NA", Description = category?.Description ?? "NA" };
})
.WithName("GetCategoryById");

app.UseCors("AllowFrontendApp"); 

app.UseAuthorization();

app.Run();

class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    public Category(int id, string name, string description) {
        Id = id;
        Name = name;
        Description = description;
    }
};

class CategoryDto {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
}

class CategoryDetailsDto {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
