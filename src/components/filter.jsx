import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Tab,Tabs,Select,MenuItem,OutlinedInput  } from '@material-ui/core'
const styles = theme => ({
  root: {
    display:"flex",
    margin:" 0 20px",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor: "#F6F8FA",
  },
  group: {
    display: "flex",
    flexDirection: "row",
    marginBottom:"0",
    height:"45px"
    },
  tabs: {
    // backgroundColor: "#2196F3",
    color: "#727679",
    '&:focus': {
      color: "black",
      fontWeight:"900"
    },
    '&:hover': {
      color: "black"
    },
  },
  Select: {
    height: "45px",
  },
});

class Filter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   filter: "open",
    // }
    this.handleChange = this.handleChange.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }
  handleChange(event,newValue) {
    this.props.changeStatus({text:newValue})
  }
handleSort(event){
    this.props.changeSorting({text:event.target.value})
}
  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.group}>
        <Tabs value={this.props.filter}  className={this.props.classes.tabs} onChange={this.handleChange}>
          <Tab label="Open" value="open" />
          <Tab label="Closed" value="closed" />
        </Tabs>
        </div>
             <Select
              value=''
              onChange={this.handleSort}
              displayEmpty
              input={<OutlinedInput name="chips" className={this.props.classes.Select} />}
              >

              <MenuItem value="" disabled>
                Sort
              </MenuItem>
                <MenuItem value="newest" >Newest</MenuItem>
                <MenuItem value="oldest" >Oldest</MenuItem>
                <MenuItem value="atoz" >A to Z</MenuItem>
                <MenuItem value="ztoa" >Z to A</MenuItem>
            </Select>
      </div>
    )
  }
}

export default withStyles(styles)(Filter)