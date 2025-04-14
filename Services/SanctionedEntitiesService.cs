using ajgre_technical_interview.Models;

namespace ajgre_technical_interview.Services
{
    public class SanctionedEntitiesService : ISanctionedEntitiesService
    {
        private readonly IDatabaseService _databaseService;

        public SanctionedEntitiesService(IDatabaseService databaseService)
        {
            _databaseService = databaseService;
        }

        public async Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity)
        {
            if(sanctionedEntity == null)
            {
                throw new ArgumentNullException(nameof(sanctionedEntity));
            }

            var sanctionedEntities = await _databaseService.GetSanctionedEntitiesAsync();

            if (sanctionedEntities
                    .Any(e =>
                        e.Name.Equals(sanctionedEntity.Name, StringComparison.OrdinalIgnoreCase) &&
                        e.Domicile.Equals(sanctionedEntity.Domicile, StringComparison.OrdinalIgnoreCase)))
            {                
                throw new InvalidOperationException($"A sanctioned entity with Name '{sanctionedEntity.Name}' and Domicile '{sanctionedEntity.Domicile}' already exists.");
            }
            
            return await _databaseService.CreateSanctionedEntityAsync(sanctionedEntity);
        }

        public async Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync()
        {
            return await _databaseService.GetSanctionedEntitiesAsync();                
        }

        public async Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id)
        {
            return await _databaseService.GetSanctionedEntityByIdAsync(id);
        }
    }
}
