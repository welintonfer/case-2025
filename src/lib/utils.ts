/**
 * Calcula os anos de experiência com base na data de início da carreira
 * Data de início: Outubro de 2010
 */
export function calculateExperienceYears(): string {
  const startDate = new Date(2010, 9, 1); // Outubro 2010 (mês 9 = outubro, pois é 0-indexado)
  const currentDate = new Date();
  
  // Calcula a diferença em anos
  let years = currentDate.getFullYear() - startDate.getFullYear();
  
  // Ajusta se ainda não passou do mês/dia de aniversário no ano atual
  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())
  ) {
    years--;
  }
  
  return `${years}+`;
}

/**
 * Retorna uma descrição completa da experiência
 */
export function getExperienceDescription(): string {
  const years = calculateExperienceYears();
  return `Senior UX/UI Designer with over ${years} years of experience specializing in user-centered design, UX research, digital strategy, and innovative front-end development. Based in Portimão, Portugal.`;
}