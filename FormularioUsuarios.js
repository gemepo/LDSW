render() {

    var fields = this.fields.map( field =>{
      return this.getField(field);
    });

    return (
      <form className="form-container">
        <h1>{this.title}</h1>
          <Row>
            {fields}
          </Row>
          <button
            className="btn"
            onClick={this.onSubmit.bind(this.state.formData)}>
            {this.actionLabel}
          </button>
      </form>
    );
  }