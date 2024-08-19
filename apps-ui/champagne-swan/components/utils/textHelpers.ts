export const useLineBreakParser = (text: string) => {
  if (!text || text.length <= 0) return;
  return text.replace(/\\n/g, "\n");
};
