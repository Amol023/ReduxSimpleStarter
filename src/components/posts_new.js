import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

@connect(null, dispatch => bindActionCreators({
  createPost
}, dispatch))
class PostsNew extends Component {
  renderField({input, label, meta: { touched, error }
  }) {
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="form-control" type="text" { ...input }/>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values);
  }
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField}/>
          <Field label="Categories" name="categories" component={this.renderField}/>
          <Field label="Content" name="content" component={this.renderField}/>
          <button className="btn btn-primary">
            Submit
            <Link></Link>
          </button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title)
    errors.title = 'Enter a title';
  if (!values.categories)
    errors.categories = 'Enter categories';
  if (!values.content)
    errors.content = 'Enter some content';

  return errors;
}

export default reduxForm({validate, form: 'PostsNewForm'})(PostsNew);