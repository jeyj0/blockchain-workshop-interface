const reader = new FileReader();

export default ipfs => {
  // reader.onload = event => console.log(event.target.result);
  // reader.onerror = error => reject(error);
  // return reader.readAsArrayBuffer();

  return [
    {
      path: "/tmp/myfile.txt",
      content: ipfs.types.Buffer.from("ABC")
    }
  ];
};
