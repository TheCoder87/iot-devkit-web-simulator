import { connect } from 'react-redux';
import Project from '../components/project';
import { setEditorPath,selectProject } from '../actions';
import {List} from 'immutable';

const mapStateToProps = (state) => ({
    project: state.project.get('currentProject'),
	allProjects: state.project.get('projects'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setEditorPath: (path) => {
        setEditorPath(dispatch, path);
    },
	selectProject: (name) => {
		selectProject(dispatch,name);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
