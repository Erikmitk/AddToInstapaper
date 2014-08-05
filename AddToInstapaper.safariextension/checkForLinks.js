document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
	var node = event.target;
	
	if(node.tagName != 'A') {
		node = findParentAnchorNode(node);
	}
	
	if (node == null) {
		return;
	}

	safari.self.tab.setContextMenuEventUserInfo(event, { "tag": node.tagName, "url": node.href });
}

function findParentAnchorNode(node) {
	var parent = node.parentNode;
	while((parent) && (parent.tagName != 'A')) {  
		parent = parent.parentNode;
	}
	return parent;
}
