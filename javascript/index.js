class TypeCMS {
  constructor(obj) {
    this.baseUrl = obj.baseUrl;
    this.key = obj.key;
    this.secret = obj.secret;
    this.projectId = obj.projectId;
  }

  async getEntries(body) {
    const token = this.key + ":" + this.secret;

    try {
      const response = await fetch(
        `${this.baseUrl}/api/projects/${this.projectId}/content`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      // Handle error
    }
  }
}

export default TypeCMS;
