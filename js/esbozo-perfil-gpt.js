function toggleEditMode() {
    const descriptionArea = document.getElementById('descriptionArea');
    if(descriptionArea.hasAttribute('readonly')) {
        descriptionArea.removeAttribute('readonly');
        descriptionArea.focus();
    } else {
        descriptionArea.setAttribute('readonly', true);
    }
}