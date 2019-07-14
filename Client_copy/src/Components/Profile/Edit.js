/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import profileData from '../../Data/ProfileData';
import './style.css';
import DashboardHeader from '../DashboardNavbar/DashboardHeader';

const html = [...profileData].map(profile => (
	<div className="container emp-profile mainProfile">
		<div className="col-lg-4">
			<h2>Edit Profile</h2>
		</div>
		<form>
			<div className="row">
				<div className="col-md-4">
					<div className="profile-img">
						<img src={profile.profile_pic} alt="profile pic" />
						<div className="file btn btn-lg btn-primary">
							Change Photo
							<input type="file" name="file" />
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="profile-head">
						<h5>{profile.username}</h5>
					</div>
				</div>
			</div>
			<h6 className="text-divider">
				<span>Personal Information</span>
			</h6>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">First name</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="Paarmita" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Last name</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="Bhargava" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Email</label>
				<div className="col-lg-9">
					<input className="form-control" type="email" value="paarmita1998@gmail.com" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Phone No</label>
				<div className="col-lg-9">
					<input className="form-control" type="url" value="" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Birthday</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="28-07-1998" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Age</label>
				<div className="col-lg-9">
					<input className="form-control" type="password" value="11111122333" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Gender</label>
				<div className="col-lg-9">
					<input className="form-control" type="password" value="11111122333" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Location</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="" placeholder="City" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label" />
				<div className="col-lg-6">
					<input className="form-control" type="text" value="" placeholder="State" />
				</div>
				<div className="col-lg-3">
					<input className="form-control" type="text" value="" placeholder="Country" />
				</div>
			</div>
			<h6 className="text-divider">
				<span>Account Information</span>
			</h6>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Username</label>
				<div className="col-lg-9">
					<input className="form-control" type="text" value="paarmita" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Bio</label>
				<div className="col-lg-9">
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						value="Student in some college. Leads a healthy lifestyle"
					/>
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">Password</label>
				<div className="col-lg-9">
					<input className="form-control" type="password" value="11111122333" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label">
					Confirm password
				</label>
				<div className="col-lg-9">
					<input className="form-control" type="password" value="11111122333" />
				</div>
			</div>
			<div className="form-group row">
				<label className="col-lg-3 col-form-label form-control-label" />
				<div className="col-lg-12 btnProfile text-center">
					<input type="reset" className="btn btn-secondary btnProfile" value="Cancel" />
					<input
						type="button"
						className="btn btn-primary btnProfile"
						value="Save Changes"
					/>
				</div>
			</div>
		</form>
	</div>
));
class EditProfile extends React.Component {
	render() {
		return (
			<div>
				<DashboardHeader />
				{html}
			</div>
		);
	}
}
export default EditProfile;
