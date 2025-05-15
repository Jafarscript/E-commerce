/* eslint-disable no-unused-vars */
import { LogOut } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'address', 'payment', 'orders', 'returns', 'cancellations'
  // Mock user data - in a real app, this would come from context or API
  const [profile, setProfile] = useState({ firstName: 'Md', lastName: 'Rimel', email: 'rimel111@gmail.com', address: 'Kingston, 5236, United State' });
  const [passwords, setPasswords] = useState({ current: '', new: '', confirmNew: '' });
  let navigate =useNavigate()

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleProfileChange = (e) => setProfile({...profile, [e.target.name]: e.target.value });
  const handlePasswordChange = (e) => setPasswords({...passwords, [e.target.name]: e.target.value });

  const handleProfileSave = (e) => { e.preventDefault(); console.log("Profile saved:", profile); alert("Profile changes saved (demo)."); };
  const handlePasswordSave = (e) => { e.preventDefault(); if(passwords.new !== passwords.confirmNew) { alert("New passwords do not match."); return; } console.log("Password change requested for:", passwords.current); alert("Password change saved (demo)."); setPasswords({current: '', new: '', confirmNew: ''});};

  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <form onSubmit={handleProfileSave} className="space-y-6">
            <h3 className="text-xl text-red-500 mb-4">Edit Your Profile</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block text-sm text-gray-500 mb-1.5">First Name</label><input type="text" name="firstName" value={profile.firstName} onChange={handleProfileChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/></div>
              <div><label className="block text-sm text-gray-500 mb-1.5">Last Name</label><input type="text" name="lastName" value={profile.lastName} onChange={handleProfileChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/></div>
              <div><label className="block text-sm text-gray-500 mb-1.5">Email</label><input type="email" name="email" value={profile.email} onChange={handleProfileChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/></div>
              <div><label className="block text-sm text-gray-500 mb-1.5">Address</label><input type="text" name="address" value={profile.address} onChange={handleProfileChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/></div>
            </div>
            <h3 className="text-lg text-gray-700 pt-4">Password Changes</h3>
            <div className="space-y-4">
              <input type="password" name="current" placeholder="Current Password" value={passwords.current} onChange={handlePasswordChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
              <input type="password" name="new" placeholder="New Password" value={passwords.new} onChange={handlePasswordChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
              <input type="password" name="confirmNew" placeholder="Confirm New Password" value={passwords.confirmNew} onChange={handlePasswordChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button type="button" onClick={() => alert("Cancel clicked")} className="px-6 py-3 text-sm rounded hover:bg-gray-100">Cancel</button>
              <button type="submit" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition text-sm">Save Changes</button>
            </div>
          </form>
        );
      // Add cases for 'address', 'payment', etc.
      default: return <p>Content for {activeTab.replace(/^\w/, c => c.toUpperCase())} goes here.</p>;
    }
  };

  const NavItem = ({ name, currentTab, setTab, children }) => (
    <button onClick={() => setTab(name)} className={`block w-full text-left px-4 py-2 text-sm rounded ${currentTab === name ? 'text-red-500 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`}>
      {children}
    </button>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Breadcrumbs handled globally */}
      <div className="flex justify-end mb-4">
        <p className="text-sm text-gray-600">Welcome! <span className="text-red-500">{profile.firstName} {profile.lastName}</span></p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 space-y-2">
          <div>
            <h4 className="font-medium mb-2 px-4">Manage My Account</h4>
            <NavItem name="profile" currentTab={activeTab} setTab={setActiveTab}>My Profile</NavItem>
            <NavItem name="address" currentTab={activeTab} setTab={setActiveTab}>Address Book</NavItem>
            <NavItem name="payment" currentTab={activeTab} setTab={setActiveTab}>My Payment Options</NavItem>
          </div>
          <div>
            <h4 className="font-medium mb-2 mt-4 px-4">My Orders</h4>
            <NavItem name="returns" currentTab={activeTab} setTab={setActiveTab}>My Returns</NavItem>
            <NavItem name="cancellations" currentTab={activeTab} setTab={setActiveTab}>My Cancellations</NavItem>
          </div>
          <NavItem name="wishlist" currentTab={activeTab} setTab={() => navigate('/wishlist')}>My WishList</NavItem>
          <button onClick={() => {alert("Logging out..."); navigate('/login')}} className="w-full text-left px-4 py-2 text-sm rounded text-red-500 hover:bg-red-50 font-medium mt-4 flex items-center gap-2"><LogOut size={16}/> Logout</button>
        </aside>
        <main className="md:col-span-3 p-6 shadow rounded-md bg-white">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AccountPage