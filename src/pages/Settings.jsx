import { useState } from 'react';
import { Plus, Trash2, Edit3, DollarSign, BedDouble } from 'lucide-react';
import './Settings.css';

const Settings = () => {
    const [roomTypes, setRoomTypes] = useState([
        { id: 1, name: 'Standard Room', price: 1200, description: 'Basic comfortable room' },
        { id: 2, name: 'Deluxe Suite', price: 2500, description: 'Luxury suite with city view' },
    ]);

    const [newRoomType, setNewRoomType] = useState({ name: '', price: '', description: '' });
    const [isAdding, setIsAdding] = useState(false);

    const handleAddRoomType = (e) => {
        e.preventDefault();
        if (!newRoomType.name || !newRoomType.price) return;

        const id = Date.now();
        setRoomTypes([...roomTypes, { ...newRoomType, id: id, price: Number(newRoomType.price) }]);
        setNewRoomType({ name: '', price: '', description: '' });
        setIsAdding(false);
    };

    const handleDeleteRoomType = (id) => {
        setRoomTypes(roomTypes.filter(room => room.id !== id));
    };

    return (
        <div className="page-content settings-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Settings & Configuration</h1>
                    <p className="page-subtitle">Manage room types, pricing, and system defaults.</p>
                </div>
                <button className="btn btn-primary" onClick={() => setIsAdding(true)}>
                    <Plus size={20} />
                    <span>Add New Room Type</span>
                </button>
            </div>

            <div className="settings-grid">
                <section className="settings-section card shadow-sm">
                    <div className="card-header">
                        <h2 className="card-title">Room Type Management</h2>
                    </div>
                    <div className="card-body">
                        {isAdding && (
                            <form className="add-room-form" onSubmit={handleAddRoomType}>
                                <div className="input-group">
                                    <label className="input-label">Room Type Name</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="e.g. Executive Suite"
                                        value={newRoomType.name}
                                        onChange={(e) => setNewRoomType({ ...newRoomType, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Price per Night (THB)</label>
                                    <div className="input-with-icon">
                                        <DollarSign size={16} className="field-icon" />
                                        <input
                                            type="number"
                                            className="input-field pill-icon"
                                            placeholder="0.00"
                                            value={newRoomType.price}
                                            onChange={(e) => setNewRoomType({ ...newRoomType, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Description (Optional)</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Brief description of the room"
                                        value={newRoomType.description}
                                        onChange={(e) => setNewRoomType({ ...newRoomType, description: e.target.value })}
                                    />
                                </div>
                                <div className="form-actions">
                                    <button type="button" className="btn btn-outline" onClick={() => setIsAdding(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-primary">Save Room Type</button>
                                </div>
                            </form>
                        )}

                        <div className="room-types-list">
                            <table className="settings-table">
                                <thead>
                                    <tr>
                                        <th>Room Type</th>
                                        <th>Price / Night</th>
                                        <th>Description</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roomTypes.map((room) => (
                                        <tr key={room.id}>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="type-icon-wrapper"><BedDouble size={16} /></div>
                                                    <span className="font-bold">{room.name}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="price-tag">฿{room.price.toLocaleString()}</span>
                                            </td>
                                            <td>
                                                <span className="text-muted">{room.description || '-'}</span>
                                            </td>
                                            <td className="text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="btn-icon btn-ghost"><Edit3 size={16} /></button>
                                                    <button className="btn-icon btn-ghost text-danger" onClick={() => handleDeleteRoomType(room.id)}><Trash2 size={16} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {roomTypes.length === 0 && !isAdding && (
                                        <tr>
                                            <td colSpan="4" className="empty-state">No room types configured. Add one to get started.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Settings;
