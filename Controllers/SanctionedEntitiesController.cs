using ajgre_technical_interview.Models;
using ajgre_technical_interview.Services;
using Microsoft.AspNetCore.Mvc;

namespace ajgre_technical_interview.Controllers
{
    [ApiController]
    [Route("api/sanctioned-entities")]
    public class SanctionedEntitiesController : ControllerBase
    {
        private readonly ISanctionedEntitiesService _sanctionedEntitiesService;

        public SanctionedEntitiesController(ISanctionedEntitiesService sanctionedEntitiesService)
        {
            _sanctionedEntitiesService = sanctionedEntitiesService;
        }


        [HttpGet]
        public async Task<IActionResult> GetSanctionedEntities()
        {
            try
            {
                var entities = await _sanctionedEntitiesService.GetSanctionedEntitiesAsync();
                return Ok(entities);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }

        [HttpPost]
        public async Task<IActionResult> CreateSanctionedEntity([FromBody]SanctionedEntity sanctionedEntity)
        {
            try
            {
                var entities = await _sanctionedEntitiesService.CreateSanctionedEntityAsync(sanctionedEntity);
                return Ok(entities);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest($"Invalid input: {ex.Message}");
            }
            catch (InvalidOperationException ex)
            {
                return Conflict($"Duplicate entity detected: {ex.Message}");
            }
            catch (Exception ex)
            {
                return Problem(ex.Message);
            }

        }
    }
}
