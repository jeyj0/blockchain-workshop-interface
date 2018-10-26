const displayKnowledge = knowledges => {
  console.log(knowledges);

  knowledges.map(knowledge =>
    console.log("name: " + knowledge.name + " | hash: " + knowledge.hash)
  );
};

export default displayKnowledge;
